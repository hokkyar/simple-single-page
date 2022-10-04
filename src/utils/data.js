const data = [
    {
        home: {
            title: 'Home',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eveniet sapiente at, assumenda harum voluptate dolorum cum dicta dolor. Harum minus voluptate neque modi nulla, molestias necessitatibus repellat maiores tempore aliquam blanditiis at molestiae distinctio aspernatur expedita, corrupti in eos atque animi quam. Sint quos deleniti temporibus, recusandae beatae et atque rerum inventore id nobis placeat, facere sed dolore, magnam eum consectetur facilis hic blanditiis quam odit pariatur neque. Praesentium modi quo dolorum recusandae voluptatum. Quasi omnis fuga voluptates nesciunt nihil! Delectus ipsum molestias beatae quasi velit officia minima sit porro ea voluptate. Libero quaerat animi eum eligendi ab. Voluptas.'
        },
        projects: {
            title: 'Projects',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eveniet sapiente at, assumenda harum voluptate dolorum cum dicta dolor. Harum minus voluptate neque modi nulla, molestias necessitatibus repellat maiores tempore aliquam blanditiis at molestiae distinctio aspernatur expedita, corrupti in eos atque animi quam. Sint quos deleniti temporibus, recusandae beatae et atque rerum inventore id nobis placeat, facere sed dolore, magnam eum consectetur facilis hic blanditiis quam odit pariatur neque. Praesentium modi quo dolorum recusandae voluptatum. Quasi omnis fuga voluptates nesciunt nihil! Delectus ipsum molestias beatae quasi velit officia minima sit porro ea voluptate. Libero quaerat animi eum eligendi ab. Voluptas.'
        },
        contact: {
            title: 'Contact',
            content: {
                nama: 'Komang Hokky Aryasta',
                email: 'hokky@undiksha.ac.id'
            }
        },
    }
];

const showFormattedDate = (date) => {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }
    return new Date(date).toLocaleDateString("id-ID", options)
}

export { data, showFormattedDate };