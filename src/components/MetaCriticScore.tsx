interface Props {
  metacritic: number;
}
function MetaCriticScore({ metacritic }: Props) {
  return <div>{metacritic}</div>;
}

export default MetaCriticScore;
