const gql = (x) => x;
export default gql`
    query Cycle($id: String!) {
        cycle(id: $id) {
            number
            name
            completedScopeHistory
            scopeHistory
            issues {
                nodes {
                    identifier
                    title
                    state {
                        type
                        color
                        name
                        position
                    }
                    assignee {
                        name
                    }
                    project {
                        name
                        color
                    }
                }
            }
        }
    }
`[0];
