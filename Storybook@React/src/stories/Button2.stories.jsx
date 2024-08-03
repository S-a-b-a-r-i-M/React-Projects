import Button2 from "../components/Button2";

export default {
  title: "Component/Button2",
  component: Button2,
  argTypes: {
    onClick: { action: "clicked" },
  }
}

const Template = (args) => <Button2 {...args}/>

// Primary btn
export const Primary = (args) => <Button2 {...args}/> // We can use template.bind or else this one.
Primary.args = {
  children: "Primary btn2",
  className: "bg-blue-400 hover:bg-blue-500 text-white",
}

// Secondary btn
export const Secondary = Template.bind({})
Secondary.args = {
  children: "Secondary btn2",
  className: "bg-gray-200 hover:bg-gray-300 text-gray-800"
}

// Outline
export const Outline = Template.bind({})
Outline.args = {
  children: "Outline",
  className: "bg-white text-black rounded-md border border-black",
}