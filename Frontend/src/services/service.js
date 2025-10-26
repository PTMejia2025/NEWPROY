// ========================================
// services/service.js (modo local)
// ========================================
import { Lexer } from "../../../Lexer/Lexer.js";
import { Parser } from "../../../Paser/Parser.js";

export const apiService = {
  async analyzer(code) {
    try {
      const lexer = new Lexer();
      const { tokens, errors: lexicalErrors } = lexer.analizar(code);

      const parser = new Parser();
      const result = parser.analizar(tokens);

      return {
        data: {
          tokens,
          lexicalErrors,
          syntaxErrors: result.errors || [],
          pythonCode: result.pythonCode || "",
        },
      };
    } catch (error) {
      console.error("Error al analizar el código:", error);
      throw error;
    }
  },
};
