import CountryCard from "@/components/CountryCard";
import { useCountriesQuery } from "@/graphql/generated/schema";

export default function Home() {
  const { data: countries } = useCountriesQuery({
    errorPolicy: "ignore",
  })

  if (!countries) {
    return <p>Loading...</p>;
  }

  return (
    <section id="countries-container">
      {countries.countries.map((country) => <CountryCard {...country} link={`/countries/${country.code}`} key={country.id} />)}
    </section>
  );
}
