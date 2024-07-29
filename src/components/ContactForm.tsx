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
import { useToast } from "@/components/ui/use-toast";

const FormSchema = z.object({
	Email: z.string().email({ message: "Invalid email address." }),
	Name: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}),
	Message: z.string().min(10, {
		message: "Description must be at least 10 characters.",
	}),
});

export function ContactFormDemo() {
	const { toast } = useToast();

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			Email: "",
			Name: "",
			Message: "",
		},
	});

	async function onSubmit(data: z.infer<typeof FormSchema>) {
		try {
			const response = await fetch(
				"https://script.google.com/macros/s/AKfycbxUVRtZlOusMMHw-B076NRY0mapwcWGwgKP_naDoVlEYc_NC2TO6mNEKdYtvNNHNPSwcg/exec",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				}
			);

			const result = await response.json();
			console.log("HERE:");
			console.log(result);
			if (result.result === "success") {
				toast({
					title: "Success!",
					description: "Your message has been sent.",
				});
				form.reset();
			} else {
				toast({
					title: "Error!",
					variant: "destructive",
					description: `There was a problem submitting your form: ${result.error}`,
				});
			}
		} catch (error) {
			toast({
				title: "Error!",
				variant: "destructive",
				description: `There was a problem submitting your form: ${error.message}`,
			});
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
				<FormField
					control={form.control}
					name="Email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>E-mail</FormLabel>
							<FormControl>
								<Input type="email" placeholder="" {...field} />
							</FormControl>
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
