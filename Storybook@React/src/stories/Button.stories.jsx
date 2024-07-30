import Button from "../components/Button";

export default {
  name: "Component/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  }
}

const Template = (args) => <Button {...args}/>

export const Primary = Template.bind({})
Primary.args = {
  name: "Primary",
  variant: "primary",
  onClick: () => console.log("clicked")
}

export const Secondary = Template.bind({})
Secondary.args = {
  name: "Secondary",
  variant: "secondary",
  onClick: () => console.log("clicked")
}