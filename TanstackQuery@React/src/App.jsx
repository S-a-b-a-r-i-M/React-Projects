import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { wait } from "./utils"

const POSTS = [
  {id: 1, title:"Post 1"},
  {id: 2, title:"Post 2"},
  {id: 3, title:"Post 3"},
  // {id: 4, title:"Post 4"},
]

function App() {
  
  console.log("posts", POSTS  );
  const queryClient = useQueryClient()
  
  const {
    data: posts, 
    isLoading: isPostLoading, 
    isFetching: isPostFetching,
    isError: isPostError, 
    error: postError } = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(() => [...POSTS]),
    // staleTime: 2 * 60 * 1000,
  })

  const postMutation = useMutation({
    mutationFn: (title) => wait(500).then(() => POSTS.push({id: POSTS.length+1, title})),
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"])
    }
  })
  
  if(isPostError) return <div className="text-red-500 text-2xl text-center my-10">{postError}</div>

  return (
    <div className="w-full text-2xl text-blue-700 flex flex-col items-center">
      <div className="my-10">
        {isPostLoading 
          ? <p className="text-orange-400">Loading...</p>
          : <ul>
              {posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
        }
        {postMutation.isPending || isPostFetching && <p className="text-sm text-gray-300 text-right">Fetching new data...</p>}
      </div>
      <button 
        className="text-xl bg-blue-50 hover:bg-blue-100 border-2 border-blue-100 hover:border-blue-500 rounded-md p-2"
        onClick={() => postMutation.mutate("New Post")}
        disabled={postMutation.isPending}
      >
        Add New+
      </button>
    </div>
  )
}

export default App
