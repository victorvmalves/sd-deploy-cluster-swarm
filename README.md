# Instruções para Configuração e Deploy de Aplicação com Docker Swarm no 'Play with Docker'

Este guia fornece instruções passo a passo para clonar um repositório, construir a imagem Docker e fazer o deploy da aplicação utilizando Docker Swarm no 'Play with Docker'.

## Acesso ao 'Play with Docker' e criação dos Hosts

### Passo 1: Abrir 'Play with Docker'

```sh
https://labs.play-with-docker.com
```

### Passo 2:

Clicar no botão START e após inserir credenciais.

### Passo 3: Criar Hosts

Criar a quantidade de hosts desejados clicando no botão ADD NEW INSTANCE. 

## Configuração no Node Manager

### Passo 4: Clonar o Repositório

```sh
git clone https://github.com/victorvmalves/sd-deploy-cluster-swarm.git
```

### Passo 5: Navegar até a Pasta do Projeto

```sh
cd sd-deploy-cluster-swarm
```

### Passo 6: Inicializar o Docker Swarm

```sh
docker swarm init --advertise-addr $(hostname -i)
```

### Passo 7: Deploy da Stack

```sh
docker stack deploy --compose-file docker-compose.yml testeapi
```

### Passo 8: Verificar os Serviços

```sh
docker stack services testeapi
```

## Configuração nos Nodes Workers

### Passo 9: Clonar o Repositório

```sh
git clone https://github.com/victorvmalves/sd-deploy-cluster-swarm.git
```

### Passo 10: Navegar até a Pasta do Projeto

```sh
cd sd-deploy-cluster-swarm
```

### Passo 11: Construir a Imagem Docker

```sh
docker build -t api .
```

### Passo 12: Ingressar no Swarm

Utilize o token fornecido pelo comando docker swarm init do Manager. Execute o comando abaixo, substituindo TOKEN-INFORMADO-NO-MASTER pelo token real e IP-DO-MANAGER pelo endereço IP do Manager:

```sh
docker swarm join --token TOKEN-INFORMADO-NO-MASTER IP-DO-MANAGER:2377
```

### Conclusão

Seguindo os passos acima, você terá configurado o Docker Swarm com um node Manager e múltiplos Workers, além de ter feito o deploy da aplicação utilizando a stack do Docker Compose.

```css
Ajustes para o Docker Labs

- No passo 4, utilize `$(hostname -i)` para obter o endereço IP da máquina no Docker Labs, que pode ser diferente em cada ambiente.
- No passo 10, adicione a instrução para substituir o `IP-DO-MANAGER` pelo endereço IP do Manager, o que é importante em um ambiente do 'Play with Docker' onde os endereços IP podem variar.

Este guia deve ser adequado para uso no 'Play with Docker', considerando que o ambiente pode ter algumas particularidades em relação a IPs e configurações de rede.
```
