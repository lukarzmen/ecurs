class CourseService {
    fetchCourseStructure(courseId: number): any{
        const course = [
            {
                id: 1,
                title: "Grammar Basics",
                lessons: [
                    {
                        id: 1,
                        name: "Parts of Speech"
                    },
                    {
                        id: 2,
                        name: "Tenses: Past, Present, and Future"
                    },
                    {
                        id: 3,
                        name: "Sentence Structure"
                    }
                ]
            },
            {
                id: 2,
                title: "Vocabulary and Pronunciation",
                lessons: [
                    {
                        id: 4,
                        name: "Building a Strong Vocabulary"
                    },
                    {
                        id: 5,
                        name: "Commonly Mispronounced Words"
                    },
                    {
                        id: 6,
                        name: "Idioms and Phrasal Verbs"
                    }
                ]
            },
            {
                id: 3,
                title: "Reading and Writing Skills",
                lessons: [
                    {
                        id: 7,
                        name: "Reading Comprehension Strategies"
                    },
                    {
                        id: 8,
                        name: "Essay Writing: Structure and Style"
                    },
                    {
                        id: 9,
                        name: "Creative Writing: Storytelling Techniques"
                    }
                ]
            }
        ];
        return course
    }

    fetchCourseContent(lessonId: number): any{{
        const lessonsContent = [
            {
                id: 1,
                name: "Parts of Speech",
                content: `
                Parts of speech are the basic categories of words according to their function in a sentence. In English, there are eight primary parts of speech: 
                - **Nouns** are words that name a person, place, thing, or idea. For example, "dog," "happiness," and "car" are all nouns. 
                - **Verbs** express actions or states of being. Examples include "run," "think," and "jump."
                - **Adjectives** describe or modify nouns, such as "blue," "quick," or "happy."
                - **Adverbs** modify verbs, adjectives, or other adverbs, often ending in "-ly," such as "quickly," "very," or "well."
          
                Understanding these categories helps in constructing clear and grammatically correct sentences. For instance, in the sentence "The quick brown fox jumps over the lazy dog," "fox" and "dog" are nouns, "jumps" is a verb, "quick" and "brown" are adjectives, and "over" is a preposition. Recognizing parts of speech is fundamental to mastering English grammar.
                `
            },
            {
                id: 2,
                name: "Tenses: Past, Present, and Future",
                content: `
                Tenses are essential in English grammar as they indicate the time when an action takes place. There are three main tenses: past, present, and future.
                - **Past Tense** is used to describe actions that have already happened. For example, "I walked to the store yesterday."
                - **Present Tense** describes actions currently happening or general truths. For example, "She walks to school every day."
                - **Future Tense** describes actions that will happen. For example, "They will travel to Japan next year."
          
                Each tense can be further divided into four aspects: simple, continuous, perfect, and perfect continuous. For example, the present continuous tense ("I am walking") describes an ongoing action. Understanding and using tenses correctly is crucial for clear communication in English.
                `
            },
            {
                id: 3,
                name: "Sentence Structure",
                content: `
                Sentence structure refers to the way words are organized in a sentence. There are several basic types of sentences:
                - **Simple Sentence**: Contains one independent clause. For example, "She reads books."
                - **Compound Sentence**: Contains two or more independent clauses joined by a conjunction. For example, "She reads books, and he writes stories."
                - **Complex Sentence**: Contains one independent clause and at least one dependent clause. For example, "Although she reads books, he prefers writing stories."
                - **Compound-Complex Sentence**: Contains two or more independent clauses and at least one dependent clause. For example, "She reads books, and he writes stories because they both love literature."
          
                Understanding sentence structure is key to writing clear and effective sentences. By varying sentence structures, you can make your writing more engaging and easier to understand.
                `
            },
            {
                id: 4,
                name: "Building a Strong Vocabulary",
                content: `
                Building a strong vocabulary is essential for effective communication in English. Here are some strategies to help expand your vocabulary:
                - **Read Widely and Regularly**: Reading books, articles, and essays exposes you to new words in context, helping you understand their meanings and how they are used.
                - **Use a Dictionary**: Whenever you encounter a new word, look it up in a dictionary. This helps reinforce its meaning and usage.
                - **Practice Using New Words**: Incorporate new words into your writing and speech to make them part of your active vocabulary.
                - **Learn Word Roots, Prefixes, and Suffixes**: Understanding the roots of words can help you decipher the meanings of unfamiliar words.
          
                For example, the word "benevolent" can be broken down into the prefix "bene-" meaning "good" and the root "-vol-" meaning "wish," leading to the meaning "wishing good." Regular practice with these strategies will significantly enhance your vocabulary over time.
                `
            },
            {
                id: 5,
                name: "Commonly Mispronounced Words",
                content: `
                Pronunciation is a key aspect of spoken English. Some words are commonly mispronounced by learners. Here are a few examples:
                - **Colonel**: Pronounced as "ker-nul."
                - **Mischievous**: Often mispronounced as "mis-CHEE-vee-us," but the correct pronunciation is "MIS-chuh-vus."
                - **February**: Commonly pronounced as "FEB-yoo-air-ee," but the correct pronunciation includes the "r": "FEB-roo-air-ee."
          
                Practice saying these words correctly to improve your pronunciation. Listening to native speakers and repeating after them is also an effective way to master correct pronunciation.
                `
            },
            {
                id: 6,
                name: "Idioms and Phrasal Verbs",
                content: `
                Idioms and phrasal verbs are essential for sounding natural in English. 
                - **Idioms**: Fixed expressions with meanings different from their literal interpretations. For example, "It's raining cats and dogs" means it's raining heavily.
                - **Phrasal Verbs**: Verbs combined with prepositions or adverbs that change their meaning. For example, "give up" means to stop trying.
          
                Learning these can be challenging because their meanings aren't always obvious, but they are commonly used in everyday English. Practice using idioms and phrasal verbs in context to become more familiar with them.
                `
            },
            {
                id: 7,
                name: "Reading Comprehension Strategies",
                content: `
                Developing strong reading comprehension skills is crucial for understanding and interpreting written texts. Here are some strategies:
                - **Skimming**: Quickly reading through a text to get the main idea.
                - **Scanning**: Looking for specific information within a text.
                - **Critical Reading**: Analyzing and evaluating the content of the text to understand deeper meanings and implications.
          
                For example, when reading an article, start by skimming to grasp the overall topic, then scan for key details, and finally, critically analyze the arguments presented. These strategies will help you become a more effective reader.
                `
            },
            {
                id: 8,
                name: "Essay Writing: Structure and Style",
                content: `
                Writing a strong essay involves understanding its structure and developing a clear, coherent style. Here’s a basic structure:
                - **Introduction**: Present the main idea or thesis of the essay.
                - **Body Paragraphs**: Each paragraph should focus on a single point that supports the thesis. Start with a topic sentence, followed by evidence or examples, and conclude with a sentence that ties the point back to the thesis.
                - **Conclusion**: Summarize the main points and restate the thesis in light of the evidence provided.
          
                Style involves choosing appropriate vocabulary, maintaining a formal tone, and ensuring clarity and conciseness. For example, instead of writing "a lot of," consider using "many" or "numerous." Practice writing essays on various topics to refine your structure and style.
                `
            },
            {
                id: 9,
                name: "Creative Writing: Storytelling Techniques",
                content: `
                Creative writing allows you to express your imagination through stories. Here are some techniques to enhance your storytelling:
                - **Character Development**: Create well-rounded characters with distinct personalities, desires, and conflicts. For example, consider what drives your character and how they change throughout the story.
                - **Plot Structure**: Organize your story with a clear beginning, middle, and end. Use elements like rising action, climax, and resolution to build tension and interest.
                - **Descriptive Language**: Use vivid language to create strong imagery and engage the reader's senses. For example, instead of saying "the forest was dark," describe it as "the forest loomed, its shadows thick with mystery."
          
                By applying these techniques, you can create compelling stories that captivate your readers. Practice by writing short stories, focusing on different aspects of storytelling each time.
                `
            }
          ];

          return lessonsContent.find((item) => item.id === lessonId)?.content;
    }}
}

export default CourseService;