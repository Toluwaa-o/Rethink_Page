import Card from "./Card";

export default function Cards() {
  const data = [
    {
      title: "Blog writing",
      icon: "/Images/Edit.png",
      description:
        "Generate the best blog post to fit your audience with just few clicks of a button",
    },
    {
      title: "Product description",
      icon: "/Images/basil_edit-outline.png",
      description: "Instantly generate engaging product descriptions that sell",
    },
    {
      title: "Article writer",
      icon: "/Images/edit3.png",
      description:
        "Automatically create unique factual articles at the touch of a button",
    },
  ];

  const CardsData = data.map((card) => <Card key={card.title} {...card} />);

  return (
    <div className="overflow-x-scroll grid grid-flow-col auto-cols-[45%] gap-2 no-scrollbar p-2 md:auto-cols-[24%] md:gap-4">
      {CardsData}
      {CardsData}
    </div>
  );
}
