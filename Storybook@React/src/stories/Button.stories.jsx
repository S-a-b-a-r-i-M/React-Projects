import Button from "../components/Button";

export default {
  title: "Component/Button",
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
  // Here we are trying to override the The onClick prop and also 'console.log' wont show in story book
  // onClick: () => console.log("clicked") 
}

export const Secondary = Template.bind({})
Secondary.args = {
  name: "Secondary",
  variant: "secondary",
}