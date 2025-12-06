// components/core/user-avatar.tsx

// 1. Always use a dedicated, exported interface for predictable props
export interface UserAvatarProps {
  name: string;
  imageUrl: string | null;
  size?: 'sm' | 'md' | 'lg'; // Strongly typed string literal union
}

/**
 * @name UserAvatar
 * @description Renders a user's profile image or initial fallback.
 * A client component for interactive features (e.g., dropdown on click).
 */
"use client"; // Explicitly mark client components for clear boundary

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; 
import { cn } from "@/lib/utils"; // Utility function for conditional class merging

// 2. Use a named export for the component function
export const UserAvatar: React.FC<UserAvatarProps> = ({ 
  name, 
  imageUrl, 
  size = 'md' 
}) => {
  // Use name to generate fallback initials
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

  return (
    <Avatar className={cn(
      size === 'sm' && "h-8 w-8 text-xs",
      size === 'lg' && "h-14 w-14 text-base",
    )}>
      <AvatarImage src={imageUrl ?? undefined} alt={name} />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );
};