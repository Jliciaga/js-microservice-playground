import _ from "lodash";
/**
 * @formatGraphQLErrors
 * @param error
 *
 * In GraphQL there is a property called originalError,
 * this contains the original error from where ever it may come from but graphQl wraps it.
 * We take the original error,  in this case the library "got" has a response.body that -
 * comes from the actual request itself.
 */
const formatGraphQLErrors = error => {
    const errorDetails = _.get(error, "originalError.response.body");
    try {
        if (errorDetails) return JSON.parse(errorDetails);
    } catch (e) {
        return error;
    }
};

export default formatGraphQLErrors;
