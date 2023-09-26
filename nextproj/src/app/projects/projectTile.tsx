type TileProps = {
  title: string
}
export default function ProjectTile(props: TileProps) {
  return (<h1>{props.title}</h1>)
}