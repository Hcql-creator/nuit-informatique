import Card from "../components/Cards/Card"

export default function Home() {
  return <>
  <Card
  type="iconCard"
  bgColor="bg-slate-800"
  dimension={{ minheigh: "min-h-40", minwidth: "min-w-64" }}
  icon={{ icon: "🚀", iconPos: "left" }}
  txt={{
    title: "Card",
    children: "Some description here",
    textColor: "text-white",
    titleColor: "text-blue-400",
    textsize: "text-xl",
    titlesize: "text-xxl",
  }}
>
</Card>
</>;
}
