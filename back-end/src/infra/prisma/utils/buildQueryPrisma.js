

export const buildQueryPrisma = (params) => {
    const query = {}
    if (params?.page) {
        Object.assign(query,
            {
                ...query,
                take: 10,
                skip: parseInt(params?.page) * 10 || 0
            })
    }

    if (params?.search) {
        Object.assign(query,
            {
                ...query,
                where: {
                    OR: [
                    {
                        director:{
                            contains: params.search
                        }
                    },
                    {
                        title: {
                            contains: params.search
                        }
                    },
                    {
                        producer: {
                            contains: params.search
                        }
                    }
                    ]}
            })
    }

    return query
}