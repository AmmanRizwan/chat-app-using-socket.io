import { Request, Response } from "express"

const generateCode = async (req: Request, res: Response) => {
  try {
    let code = '';
    const alphaCode = 'abcdefghiklmnopqrstuvwxzy'.toUpperCase().split("");

    for (let i = 0; i < 12; i++) {
      const index = Math.floor(Math.random() * alphaCode.length);

      if (i !== 0 && i % 4 === 0) {
        code += '-';
      }
      code += alphaCode[index];
    }

    if (!code || code === "") {
      return res.status(400).json({ message: "Something went wrong cannot create a code! Please try again"});
    }

    res.status(200).json({ message: "Code Generated!", data: {
      code: code
    }})
  }
  catch (err: unknown) {
    res.status(500).json({ message: err });
  }
}

export {generateCode};