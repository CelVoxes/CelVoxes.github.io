"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
	Email: z.string().min(2, {
		message: "Email must be at least 2 characters.",
	}),

	Name: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}),

	Message: z.string().min(10, {
		message: "Description must be at least 10 characters.",
	}),
});

export function ContactFormDemo() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			Name: "",
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		toast({
			title: "You submitted the following values:",
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
	}

	return (
		<Form {...form}>
			{/* Connected to google sheet. */}
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="w-full space-y-4"
				method="POST"
				action="https://script.google.com/macros/s/AKfycbwl6qs6d6GXLPY_ezYdnguUoJHPjHj4y5hRM90_fNNI1AMMDv-8Cn0lFJwstBg7R1tMjg/exec"
			>
				<FormField
					control={form.control}
					name="Email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>E-mail</FormLabel>
							<FormControl>
								<Input type="email" placeholder="" {...field} />
							</FormControl>
							{/* <FormDescription></FormDescription> */}
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="Name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input placeholder="" {...field} />
							</FormControl>
							{/* <FormDescription></FormDescription> */}
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="Message"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Description</FormLabel>
							<FormControl>
								<Textarea placeholder="" className="resize-none" {...field} />
							</FormControl>
							<FormDescription>
								Please tell us what you would like to know.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					className="justify-center items-center px-16 py-6 mt-4"
					type="submit"
				>
					Submit
				</Button>
			</form>
		</Form>
	);
}
