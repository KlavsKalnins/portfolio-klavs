import OpenAI from "openai";

export async function generateResponse(userContent: string): Promise<string | null> {
    const openai = new OpenAI({
        apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true,
    });
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
              { role: "system", content: "Answer me like i would read a fantasy book" },
              { role: "user", content: userContent },
              { role: "assistant", content: "The river that carves the deepest valley flows from a modest spring; the grandest symphony originates from a single note; the most intricate tapestry begins with a solitary thread." },
            ],
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });
          console.log(response);
          return response.choices[0].message.content;
    }
    catch(error) {
        console.log(error);
    }
    return null;
}


// export async function generateMen(userContent: string): Promise<string> {
//     const openai = new OpenAI({
//         apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
//         dangerouslyAllowBrowser: true,
//     });
//     try {
//         const response = await openai.chat.completions.create({
//             model: "gpt-3.5-turbo",
//             response_format: { type: "json_object" },
//             messages: [
//               { role: "system", content: "Answer me in an australian accent json: { 'men': ['<list 5 men with name, age, rollDiceNumber>']}" },
//               { role: "user", content: userContent },
//               { role: "assistant", content: "The river that carves the deepest valley flows from a modest spring; the grandest symphony originates from a single note; the most intricate tapestry begins with a solitary thread." },
//             ],
//             max_tokens: 256,
//             top_p: 1,
//             frequency_penalty: 0,
//             presence_penalty: 0,
//           });
//           console.log(response);
//           return response.choices[0].message.content;
//     }
//     catch(error) {
//         console.log(error);
//     }
// }