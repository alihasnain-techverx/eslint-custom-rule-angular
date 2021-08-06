import { Rule } from "eslint";


export function findFixme(context: Rule.RuleContext): Rule.RuleListener {

    
    function findComments(comment) {
        if (context.options.indexOf(comment.value.toLowerCase()) >= 0) {
            context.report(comment, `${comment.value} is not allowed in the comments`);
        }

    }
    return {
        ImportDeclaration(node) {
            let sourceCode = context.getSourceCode();
            let comments = sourceCode.getAllComments();
            for (let comment of comments) {
                findComments(comment);
            }
        }
    }
}

// module.exports = {
//     create(context) {

//         function findComments(comment) {
//             if (context.options.indexOf(comment.value.toLowerCase()) >= 0) {
//                 context.report(comment, `${comment.value} is not allowed in the comments`);
//             }

//         }

//         return {
//             Program(node) {
//                 let sourceCode = context.getSourceCode();
//                 let comments = sourceCode.getAllComments();
//                 for (let comment of comments) {
//                     findComments(comment);
//                 }
//             },
//         };
//     },
// };