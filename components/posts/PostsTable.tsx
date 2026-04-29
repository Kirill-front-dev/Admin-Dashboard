"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { Post } from "@/types/posts";
import { useEffect, useState } from "react";

interface PostsTableProps {
  limit?: number;
  title?: string;
}

const PostsTable = ({ limit, title }: PostsTableProps) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/posts");
        const data: Post[] = await res.json();
        const sorted = data.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        );
        setPosts(sorted);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const filteredPosts = limit ? posts.slice(0, limit) : posts;

  const colTitle = "w-auto";
  const colAuthor = "w-[100px] table-cell";
  const colDate = "w-[100px] hidden sm:table-cell text-right";
  const colComments = "w-[100px] hidden lg:table-cell text-center";
  const colAction = "w-[80px] text-right";

  if (isLoading) {
    return (
      <div className="mt-10">
        <Skeleton className="h-8 w-[200px] mb-4" />
        <Table className="table-fixed w-full">
          <TableHeader>
            <TableRow>
              <TableHead className={colTitle}>
                <Skeleton className="h-5 w-[80%]" />
              </TableHead>
              <TableHead className={colAuthor}>
                <Skeleton className="h-5 w-24" />
              </TableHead>
              <TableHead className={colDate}>
                <Skeleton className="h-5 w-20 ml-auto" />
              </TableHead>
              <TableHead className={colComments}>
                <Skeleton className="h-5 w-12 mx-auto" />
              </TableHead>
              <TableHead className={colAction}>
                <Skeleton className="h-5 w-12 ml-auto" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: limit || 5 }).map((_, i) => (
              <TableRow key={i}>
                <TableCell className={colTitle}>
                  <Skeleton className="h-5 w-[95%]" />
                </TableCell>
                <TableCell className={colAuthor}>
                  <Skeleton className="h-5 w-28" />
                </TableCell>
                <TableCell className={colDate}>
                  <Skeleton className="h-5 w-20 ml-auto" />
                </TableCell>
                <TableCell className={colComments}>
                  <Skeleton className="h-5 w-12 mx-auto" />
                </TableCell>
                <TableCell className={colAction}>
                  <Skeleton className="h-8 w-14 ml-auto" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }

  return (
    <div className="mt-10">
      <h3 className="text-2xl mb-4 font-semibold">{title || "Posts"}</h3>
      <Table className="table-fixed w-full">
        <TableHeader>
          <TableRow>
            <TableHead className={colTitle}>Title</TableHead>
            <TableHead className={colAuthor}>Author</TableHead>
            <TableHead className={colDate}>Date</TableHead>
            <TableHead className={colComments}>Comments</TableHead>
            <TableHead className={colAction}>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredPosts.map((post) => (
            <TableRow key={post.id}>
              <TableCell
                className={`${colTitle} font-medium truncate py-4`}
                title={post.title}
              >
                {post.title}
              </TableCell>
              <TableCell className={colAuthor}>{post.author}</TableCell>
              <TableCell className={colDate}>{post.date}</TableCell>
              <TableCell className={colComments}>
                {post.comments?.length || 0}
              </TableCell>
              <TableCell className={colAction}>
                <Link href={`/posts/edit/${post.id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded text-xs transition-colors">
                    Edit
                  </button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PostsTable;
