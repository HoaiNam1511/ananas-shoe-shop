export const sidebarHeader = [
    {
        title: "Tất cả",
        value: "",
    },
    {
        title: "Nam",
        value: "",
    },
    {
        title: "Nữ",
        value: "",
    },
];

export const sidebar1 = [
    {
        id: 1,
        title: "Accessories | Phụ kiện",
        value: "",
    },
    {
        id: 2,
        title: "Footwear | Lên chân",
        value: "",
    },
    {
        id: 3,
        title: "Top | Nửa trên",
        value: "",
    },
];

let sidebarData = [
    {
        category_group_title: "Giá",
        category_group_client: [
            {
                range: 1,
                category_title: "300 - 500",
                from: 300000,
                to: 500000,
            },
            {
                range: 2,
                category_title: "500 - 800",
                from: 500000,
                to: 800000,
            },
            {
                range: 3,
                category_title: "800 - 1200",
                from: 800000,
                to: 1200000,
            },
            {
                range: 4,
                category_title: "1200 - 1500",
                from: 1200000,
                to: 1500000,
            },
            {
                range: 5,
                category_title: "> 1500",
                from: 1500,
                to: 10000000,
            },
        ],
    },
];

let id = 0;
export const sidebar2 = sidebarData.reduce((acc, item) => {
    acc.push({ id: ++id, ...item });
    acc.map((item) => {
        const result = item.category_group_client.reduce((acc1, item1) => {
            acc1.push({ id: ++id, ...item1 });
            return acc1;
        }, []);
        return { ...item, result };
    });
    return acc;
}, []);
