"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon, ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Markdown from "react-markdown";

interface Props {
  title?: string;
  company?: string;
  school?: string;
  period?: string;
  start?: string;
  end?: string;
  description?: string;
  degree?: string;
  logo?: string;
  className?: string;
}

export function ResumeCard({ title, company, school, period, start, end, description, degree, logo, className }: Props) {
  const displayTitle = title || degree;
  const displayCompany = company || school;
  const displayPeriod = period || `${start} - ${end}`;

  return (
    <Card className={`work-card ${className}`}>
      <CardContent className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        {logo && (
          <div className="flex-shrink-0">
            <Image
              src={logo}
              alt={`${displayCompany} logo`}
              width={64}
              height={64}
              className="rounded-lg object-contain"
            />
          </div>
        )}
        <div className="flex-1 space-y-4">
          <div>
            <CardTitle className="text-xl sm:text-2xl font-bold text-primary">{displayTitle}</CardTitle>
            <CardDescription className="text-base sm:text-lg text-muted-foreground mt-1">
              {displayCompany} • {displayPeriod}
            </CardDescription>
          </div>
          {description && (
            <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none text-foreground">
              <Markdown>{description}</Markdown>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
