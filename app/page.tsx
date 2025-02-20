import { DestinationCard } from '@/components/destination-card';
import client from '@/lib/contentful';
import { getDestinations } from '@/lib/data';



export default async function Home() {
const destinations = await getDestinations()


  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Discover Amazing Destinations
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Explore the natural wonders and cultural richness of Perth, Mauritius,
          and Zimbabwe
        </p>
      </section>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map(({id, name, description, image}) => (
          <DestinationCard key={id} name={name} description={description} image={image} href={`/destinations/${id}`}  />
        ))}
      </div>
    </div>
  );
}
