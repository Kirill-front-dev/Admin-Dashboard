import BackButton from "@/components/BackButton";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";

const PostEditPage = () => {
  return (
    <>
      <BackButton text="Back To Posts" link="/posts" />
    </>
  );
};

export default PostEditPage;
