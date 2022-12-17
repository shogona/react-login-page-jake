import { useCallback, useState } from "react";
import { User } from "../types/api/user";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};

//選択したユーザー情報を特定しモーダルを表示するカスタムフック
export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const targetUser = users.find((user) => user.id === id);
    //"??"...左辺がundefinedまたはnullの時に右側を実行する。という意味
    setSelectedUser(targetUser ?? null);
    onOpen();
    // setSelectedUser(targetUser!); //tsにundefinedかもしれないと言われても、絶対にあるよっていう時に使うのが"!"
  }, []);

  return { onSelectUser, selectedUser };
};
