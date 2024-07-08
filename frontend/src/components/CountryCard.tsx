import Link from "next/link";

export default function CountryCard(country: {name: string, emoji: string, link: string}) {
  return (
  <Link href={country.link} className="country-card">
    {country.name}<br />
    {country.emoji}
  </Link>
  );
}