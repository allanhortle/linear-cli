const gql = (x) => x;
export default gql`
    query Issue($id: String!) {
        issue(id: $id) {
            createdAt
            updatedAt
            completedAt
            description
            url
            title
            identifier
            priorityLabel
            state {
                name
                color
            }
            assignee {
                name
            }
            cycle {
                name
            }
            project {
                name
                color
            }
            labels {
                nodes {
                    name
                    color
                }
            }
        }
    }
`[0];
