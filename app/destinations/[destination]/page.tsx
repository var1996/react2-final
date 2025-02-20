import { notFound } from "next/navigation"
import Image from "next/image"

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"

import { getDestinations } from "@/lib/data"

interface DestinationPageProps {
  params: {
    destination: string
  }
}



export default async function DestinationPage({
  params,
}: DestinationPageProps) {
      const destinations = await getDestinations()

    const destination = destinations.find(({id}) => id === params.destination)
    

    if (!destination) {
      notFound()
    }

    return (
      <div className="space-y-8">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            {destination.name}
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            {destination.description}
          </p>
        </section>

                  <Card>
                    <CardContent className="flex aspect-[16/9] items-center justify-center p-6 relative">
                      <Image
                        src={destination.image || "/placeholder.svg"}
                        alt={`${destination.name} scene`}
                        fill
                        className="object-cover rounded-lg"
                        sizes="(max-width: 1024px) 100vw, 1024px"
                      />
                    </CardContent>
                  </Card>
                
              

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Amazing Facts</h2>
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {destination.facts.map((fact, index) => (
              <li key={index} className="p-4 rounded-lg bg-muted">
                {fact}
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-8">
          <h2 className="text-2xl font-bold">Destinations</h2>
          <div className="grid grid-cols-3 gap-6">

            {destination.places.map(({ title, description }, i) => (
              <Card key={i} className="p-4 space-y-2">
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </Card>
            ))}
          </div>
        </section>
      </div>
    )
  
}
