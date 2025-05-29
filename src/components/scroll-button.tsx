"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function ScrollButton() {
    const scrollToAbout = () => {
        document.getElementById("about")?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            className="hover-button animate-bounce glass-effect"
            onClick={scrollToAbout}
            type="button"
        >
            <ArrowDown className="h-6 w-6 text-primary" />
        </Button>
    );
} 