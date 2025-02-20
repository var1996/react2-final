import client from "./contentful"

export type Destination = {
  id: string;
  name: string;
  description: string;
  image: string;
  facts: string[];
  places: {
title: string;
description: string;
  }[]
}

export async function getDestinations() {

  const data: any = await client.getEntries({
    content_type: 'country',
    include:10,
  })
  
  // @ts-expect-error
  const parsed: Destination[] = data.items.map(item => ({...item.fields, image: item.fields!.image!.fields!.file!.url, facts: item.fields.fact, places: item.fields.place.map(place => ({...place.fields}))}) as Destination)

  return parsed
}

