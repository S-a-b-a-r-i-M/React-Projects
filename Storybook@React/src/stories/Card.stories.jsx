import { useState } from "react";
import Card from "../components/Card";
import { useEffect } from "react";


export default {
  title: "Component/Card",
  component: Card,
  argTypes: {
    variant: {
      control: {type: "select", options: ["default", "primary", "secondary"]},
    },
    onAction: { action: "clicked" }
  }
}

const Template = (args) => <Card {...args} />

// Default
export const Default = Template.bind({})
Default.args = {
  title: "Default Card",
  subtitle: "Card Subtitle",
  content: "This is the content of the card. It can be any length.",
  actionLabel: "Learn More"
}

// With Img
export const WithImg = Template.bind({})
WithImg.args = {
  ...Default.args,
  title: "With img",
  imgUrl: "https://via.placeholder.com/400x200"
}

// Primary
export const Primary = Template.bind({})
Primary.args = {
  ...Default.args,
  title: "Primary card",
  variant: "primary"
}

// Secondary
export const Secondary = Template.bind({})
Secondary.args = {
  ...Default.args,
  title: "Secondary card",
  variant: "secondary"
}

// No action
export const NoAction = Template.bind({})
NoAction.args = {
  title: "NoAction card",
  content: "This card has no content.",
}

// Dynamic content
export const DynamicContent = (args) => {
  const [content, setContent] = useState(args.content)

  useEffect(() => {
    const timer = setInterval(() => {setContent(prevC => `${prevC}.`)}, 1000)

    return () => clearInterval(timer)
  }, [])
  
  return <Card {...args} content={content}/>
}
DynamicContent.args = {
  ...Default.args,
  title: "Dynamic Content Card",
  content: "This content will grow.",
  variant: "Secondary"
}

