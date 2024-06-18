const AddBtn = document.getElementById('add_btn')
const modal = document.getElementById('modal')
const CloseBtn = document.getElementById('CloseBtn')
const CloseBtn2 = document.getElementById('CloseBtn2')
const FirstName = document.getElementById('first_name')
const submitBtn = document.getElementById('submit_btn')
const LastName = document.getElementById('last_name')
const Company = document.getElementById('company')
const Phone = document.getElementById('phone')
const tbody = document.getElementById('tbody')


AddBtn.addEventListener('click', () => {
    modal.classList.toggle("hidden")
})

CloseBtn.addEventListener('click', () => {
    modal.classList.toggle("hidden")
})

CloseBtn2.addEventListener('click', () => {
    modal.classList.toggle("hidden")
})

submitBtn.addEventListener('click', () => {
    tbody.innerHTML += `
     <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            ${FirstName.value}
                        </th>
                        <td class="px-6 py-4">
                            ${LastName.value} years old
                        </td>
                        <td class="px-6 py-4">
                         +998 ${Phone.value}
                        </td>
                        <td class="px-6 py-4">
                           ${Company.value} $
                        </td>
                        <td class="px-6 py-4  flex gap-[20px]">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            <a href="#" class="font-medium text-[red] dark:text-blue-500 hover:underline">Delete</a>

                        </td>

    </tr>

    `

    FirstName.value = ''
    LastName.value = ''
    Company.value = ''
    Phone.value = ''

})
submitBtn.addEventListener('click', () => {
    modal.classList.toggle("hidden")
})