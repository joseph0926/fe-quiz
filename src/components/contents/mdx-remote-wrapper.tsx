import { MDXRemote } from 'next-mdx-remote/rsc';
import { Button } from '@/components/ui/button';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

/**
 * text-green-500
 * text-red-500
 * bg-blue-500
 * bg-blue-600
 * bg-green-100
 * text-green-700
 * bg-red-100
 * text-red-700
 * text-gray-200
 * bg-green-100
 * text-green-700
 * bg-green-900
 * text-green-300
 * bg-gray-700
 * text-gray-300
 */

const components = {
  Alert,
  AlertDescription,
  AlertTitle,
  Card,
  Button,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
};

export const MdxRemoteWrapper = async ({ content }: { content: string }) => {
  return <MDXRemote components={components} source={content} />;
};
