// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

const roomData = defineCollection({
    type: "data",
    schema: z.array(
        z.object({
            topIdx: z.string(),
            slotInDay: z.string(),
            time: z.string(),
            module: z.string(),
            lecturer: z.string(),
            group: z.string(),
            roomName: z.string(),
            day: z.enum([
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
            ]),
            startDateString: z
                .string()
                .regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/),
            endDateString: z
                .string()
                .regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/),
        })
    ),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    roomData: roomData,
};
