import { resourcesLinks, platformLinks, communityLinks } from "../constants/constants"

function Footer() {
  return (
    <footer className="grid grid-cols-2 lg:grid-cols-3 border-t border-neutral-800 my-10 py-5">
      {/* Resources */}
      <div className="">
        <h3 className="font-semibold text-lg my-3">Resources</h3>
        <ul className="space-y-2">
        {resourcesLinks.map((link, idx) => (
          <li key={idx} className="text-neutral-400 hover:text-white">
            <a href={link.href}>{link.text}</a>
          </li>
        ))

        }
        </ul>
      </div>
      {/* Resources */}
      <div className="">
        <h3 className="font-semibold text-lg my-3">Platforms</h3>
        <ul className="space-y-2">
        {platformLinks.map((link, idx) => (
          <li key={idx} className="text-neutral-400 hover:text-white">
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
        </ul>
      </div>
      {/* Community */}
      <div className="">
        <h3 className="font-semibold text-lg my-3">Community</h3>
        <ul className="space-y-2">
        {communityLinks.map((link, idx) => (
          <li key={idx} className="text-neutral-400 hover:text-white">
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
