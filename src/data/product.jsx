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
        title: "Accessories | Phụ kiện",
        value: "",
    },
    {
        title: "Footwear | Lên chân",
        value: "",
    },
    {
        title: "Top | Nửa trên",
        value: "",
    },
];

let sidebarData = [
    {
        category_group_title: "Giá",
        category_group_client: [
            {
                category_title: "300 - 500",
            },
            {
                category_title: "500 - 800",
            },
            {
                category_title: "800 - 1200",
            },
            {
                category_title: "1200 - 1500",
            },
            {
                category_title: "> 1500",
            },
        ],
    },
];

let id = 0;
export const sidebar3 = sidebarData.reduce((acc, item) => {
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
