export enum API_TYPE {
    NODE_NEST_API,
    GO_ECHO_API,
}

// Enum網羅
// (※名前が紛らわしいが、通常のassertとは異なりBuild後にもコードは残るので注意）
const assertNever = (value: never, message?: string): never => {
    throw new Error(message ?? `Illegal value: ${value}`)
}
export const apiURL = (apiType: API_TYPE): string => {
    switch (apiType) {
        case API_TYPE.NODE_NEST_API:
            return "http://localhost:3000";
        case API_TYPE.GO_ECHO_API:
            return "http://localhost:3001";
        default:
            assertNever(apiType);
            return "http://localhost:3000";
    }
}
