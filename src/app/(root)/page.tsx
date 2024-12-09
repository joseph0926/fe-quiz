import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { techStacks } from "@/constants/tech";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="container mx-auto p-4 sm:p-6 transition-colors duration-300">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-8 text-center">
        Modern Web Technology Stack with Quiz
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {techStacks.map((tech) => (
          <Link href={`/contents/${tech.id}`} key={tech.id}>
            <Card
              key={tech.title}
              className="group hover:shadow-lg dark:hover:shadow-primary/25 transition-all duration-300 border dark:border-gray-800"
            >
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Image
                    src={tech.img}
                    alt={tech.title}
                    width={50}
                    height={50}
                  />
                  <CardTitle className="text-xl sm:text-2xl font-bold">
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
                    <h3 className="font-semibold mb-2 dark:text-gray-200">
                      주요 특징:
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {tech.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-gray-700 dark:text-gray-300 text-sm sm:text-base"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 dark:text-gray-200">
                      장점:
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
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
