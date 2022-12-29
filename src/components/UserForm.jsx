const UserForm = () => {
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
                /> 
                <label htmlFor="sobrenome">E-mail:</label>
                <input 
                type="email"
                name="email"
                id="email"
                placeholder="Digite o seu email"
                required
                /> 
            </div>
        </div>

    );
};

export default UserForm