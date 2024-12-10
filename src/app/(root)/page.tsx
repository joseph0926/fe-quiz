import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { techStacks } from '@/constants/tech';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container mx-auto p-4 transition-colors duration-300 sm:p-6">
      <h1 className="mb-4 text-center text-2xl font-bold sm:mb-8 sm:text-3xl lg:text-4xl">
        Modern Web Technology Stack with Quiz
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        {techStacks.map((tech) => (
          <Link href={`/contents/${tech.id}`} key={tech.id}>
            <Card
              key={tech.title}
              className="group border transition-all duration-300 hover:shadow-lg dark:border-gray-800 dark:hover:shadow-primary/25"
            >
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Image
                    src={tech.img}
                    alt={tech.title}
                    width={50}
                    height={50}
                  />
                  <CardTitle className="text-xl font-bold sm:text-2xl">
                    {tech.title}
                  </CardTitle>
                </div>
                <CardDescription className="dark:text-gray-400">
                  {tech.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 font-semibold dark:text-gray-200">
                      주요 특징:
                    </h3>
                    <ul className="list-disc space-y-1 pl-5">
                      {tech.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-sm text-gray-700 dark:text-gray-300 sm:text-base"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold dark:text-gray-200">
                      장점:
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 sm:text-base">
                      {tech.benefits}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
