import Stack from "../components/Stack";

export default {
  name: "Component/Stack",
  component: Stack,
  argTypes: {
    numberOfChildren: { type: "number", defaultValue: 4}
  }
}

const Template = ({numberOfChildren, ...args}) => (
  <Stack {...args}>
    {...Array(numberOfChildren).keys().map(n => 
        <div style={{width: "50px", height: "50px", backgroundColor: "red", display: "flex", alignItems: "center", justifyContent: "center", color: "white"}}>
          {n + 1}
        </div>
      )
    }
  </Stack>
)

export const Primary = Template.bind({})
Primary.args = {
  direction: "row",
  wrap: true,
  gap: 1,
  numberOfChildren: 100
}