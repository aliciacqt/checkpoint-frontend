import { useCountryDetailsQuery } from "@/graphql/generated/schema";
import { useRouter } from "next/router"

export default function CountryDetails() {
  const router = useRouter()
  const { code } = router.query;

  const { data } = useCountryDetailsQuery({
    variables: { code: code as string },
    skip: typeof code === "undefined",
  });

  const country = data?.country;

  if (typeof country === "undefined") {
    return <p>Loading...</p>;
  }

  return (
    <>
  <p id="country-emoji">{country.emoji}</p>
    <p>Name : {country.name} ({country.code})</p>
    {country.continent ? <p>Continent : {country.continent.name}</p> : <></>}
    </>
)
}