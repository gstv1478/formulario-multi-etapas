const UserForm = ({data, updateFieldHandler}) => {
    return(
        <div>
            <div className="form-control">
                <label htmlFor="name">Nome:</label>
                <input 
                type="text"
                name="name"
                id="name"
                placeholder="Digite o seu nome"
                required
                value={data.name || ""}
                onChange={(e) => updateFieldHandler("name", e.target.value)}
                /> 
                <label htmlFor="sobrenome">E-mail:</label>
                <input 
                type="email"
                name="email"
                id="email"
                placeholder="Digite o seu email"
                required
                value={data.email || ""}
                onChange={(e) => updateFieldHandler("email", e.target.value)}
                /> 
            </div>
        </div>

    );
};

export default UserForm