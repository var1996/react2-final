import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface DestinationCardProps {
  name: string;
  description: string;
  image: string;
  href: string;
}

export function DestinationCard({
  name,
  description,
  image,
  href,
}: DestinationCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-[4/3] relative">
        <Image
          src={image || '/placeholder.svg'}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild className="w-full">
          <Link href={href}>
            Explore <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
