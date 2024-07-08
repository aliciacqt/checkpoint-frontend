import CountryCard from "@/components/CountryCard";
import { useCountriesQuery, useCreateCountryMutation } from "@/graphql/generated/schema";
import { FormEvent } from "react";

export default function Home() {
  const { data: countries } = useCountriesQuery({
    errorPolicy: "ignore",
  })

  const [createCountry] = useCreateCountryMutation()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formJSON: any = Object.fromEntries(formData.entries());

    createCountry({ variables: { data: formJSON } }).catch(console.error);
  }

  return (
    <>
    <section id="add-country">
      <form action="" method="get" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required />
        <label htmlFor="emoji">Emoji</label>
        <input type="text" name="emoji" id="emoji" required />
        <label htmlFor="code">Code</label>
        <input type="text" name="code" id="code" required />
        <input type="submit" value="Add" id="form-submit" />
      </form>
    </section>
    {countries ? <section id="countries-container">
      {countries.countries.map((country) => <CountryCard {...country} link={`/countries/${country.code}`} key={country.id} />)}
    </section> : <p>Loading...</p>}
    </>
  );
}
