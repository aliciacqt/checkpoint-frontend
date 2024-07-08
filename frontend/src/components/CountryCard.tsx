export default function CountryCard(country: {name: string, emoji: string}) {
  return (
  <div className="country-card">
    {country.name}<br />
    {country.emoji}
  </div>
  );
}