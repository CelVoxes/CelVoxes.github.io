"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { boolean, z } from "zod";

import { ReloadIcon } from "@radix-ui/react-icons";

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
import { useState } from "react";

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
	const [buttonDisable, setButtonDisable] = useState(false);

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			Email: "",
			Name: "",
			Message: "",
		},
	});

	async function onSubmit(
		data:
			| string
			| string[][]
			| Record<string, string>
			| URLSearchParams
			| undefined
	) {
		setButtonDisable(true);

		try {
			const params = new URLSearchParams(data).toString();
			const response = await fetch(
				`https://script.google.com/macros/s/AKfycbwneoM8x6g-Ehsd1J8j-pcYXy2CNXX4vJtX9rVKGe2GNAETgtJSdENRwhYzogIVrZk23g/exec?${params}`,

				{
					method: "GET",
					redirect: "follow",
				}
			);

			const result = await response.json();

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
					description: `There was a problem submitting your form.`,
				});
			}
		} catch (error) {
			toast({
				title: "Error!",
				variant: "destructive",
				description: `There was a problem submitting your form: ${
					(error as Error).message
				}`,
			});
		} finally {
			setButtonDisable(false);
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
					disabled={buttonDisable}
					className="justify-center items-center px-16 py-6 mt-4"
					type="submit"
				>
					{buttonDisable && (
						<ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
					)}
					Submit
				</Button>
			</form>
		</Form>
	);
}
