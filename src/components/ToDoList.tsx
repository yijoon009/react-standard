import styled from "styled-components";
import { ChangeEvent, FormEvent, useState } from "react";

const InputArea = styled.div`
    display: flex;
`;

const Wrapper = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 30px;
`;

const TodoItems = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const TodoItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    border-bottom: 1px solid #ccc;

    &:last-child {
        border-bottom: none;
    }
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
    margin-right: 10px;
    height: 20px;
    width: 20px;
`;

const Flex = styled.div`
    display: flex;
    align-items: center;
`;

const Task = styled.span<{ completed: boolean }>`
    text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

const Button = styled.button`
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        opacity: 0.8;
    }
`;

const AddButton = styled(Button)`
    margin-left: 10px;
    background-color: #17a2b8;
    color: #fff;
`;

const EditButton = styled(Button)`
    background-color: #f5dd09;
    color: #fff;
`;

const DeleteButton = styled(Button)`
    background-color: #dc3545;
    color: #fff;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.2rem;

    &:focus {
        outline: none;
        border-color: #17a2b8;
    }
`;

type Todo = {
    completed: boolean;
    task: string;
};

const sampleList = [
    { completed: false, task: "React" },
    { completed: false, task: "AWS" },
    { completed: false, task: "DevOps" },
];

/**
 * @description 할 일 목록
 */
function TodoList() {
    const [inputValue, setInputValue] = useState<string>("");
    const [list, setList] = useState<Todo[]>(sampleList);

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const onAdd = () => {
        if (!inputValue) {
            alert("할 일을 입력하세요");
            return;
        }
        setList((prevList) => {
            const addRow = { completed: false, task: inputValue };

            // const updateList = prevList.concat(inputValue);
            const updateList = prevList.concat(addRow);

            return updateList;
        });
        setInputValue("");
    };

    const onDelete = (index: number) => {
        // console.log(index);
        setList((prevList) => {
            // 행 줄여줄때 filter 사용
            const updateList = prevList.filter((item, idx) => idx !== index);
            return updateList;
        });
    };

    const onEdit = (index: number) => {
        // prompt : 입력창 띄워주는 기능
        const updateValue = prompt();

        if (!updateValue) {
            alert("할 일을 입력하세요");
            return;
        }

        setList((prevList) => {
            // 행 갯수 건들지 않고 안에 내용만 변경할땐 map
            const updateList = prevList.map((item, idx) => {
                if (idx === index) {
                    // return updateValue;

                    // ...item: 기존값 유지
                    // task: updateValue로 바꾸기
                    const updateRow = { ...item, task: updateValue };
                    return updateRow;
                } else {
                    return item;
                }
            });
            return updateList;
        });
    };

    const onCheck = (index: number) => {
        setList((prevList) => {
            const updateList = prevList.map((item, idx) => {
                if (idx === index) {
                    const updateRow = { ...item, completed: !item.completed };
                    return updateRow;
                } else {
                    return item;
                }
            });
            return updateList;
        });
    };

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    // view
    return (
        <Wrapper>
            <Title>Todo List</Title>

            <form onSubmit={onSubmit}>
                <InputArea>
                    <Input
                        type="text"
                        placeholder="할 일을 입력해주세요."
                        value={inputValue}
                        onChange={onInputChange}
                    />
                    <AddButton onClick={onAdd}> Add</AddButton>
                </InputArea>
            </form>
            <TodoItems>
                {/* {list.map((item, index) => ( */}
                {list.map(({ completed, task }, index) => (
                    <TodoItem key={index}>
                        <Flex>
                            <Checkbox onClick={() => onCheck(index)} />
                            {/* <Task completed={item.completed}>{item.task}</Task> */}
                            <Task completed={completed}>{task}</Task>
                        </Flex>
                        <div>
                            <EditButton onClick={() => onEdit(index)}>
                                Edit
                            </EditButton>
                            <DeleteButton onClick={() => onDelete(index)}>
                                Delete
                            </DeleteButton>
                        </div>
                    </TodoItem>
                ))}
            </TodoItems>
        </Wrapper>
    );
}

export default TodoList;
