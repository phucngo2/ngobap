type RegisterType = {
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    name: string;
    ref: React.Ref<any>;
};

type SelectOptionType = {
    title: string;
    value: Provider;
};

type SelectOptionsType = SelectOptionType[];

type FormMode = "create" | "update";
