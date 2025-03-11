// Sistema de física de molas para interações avançadas
// Baseado na análise técnica fornecida

interface Position {
  x: number;
  y: number;
  scale: number;
}

interface Velocity {
  x: number;
  y: number;
  scale: number;
}

interface Spring {
  tension: number;
  friction: number;
}

export function applySpringPhysics(element: HTMLElement) {
  let velocity: Velocity = { x: 0, y: 0, scale: 0 };
  let position: Position = { x: 0, y: 0, scale: 1 };
  let targetPosition: Position = { x: 0, y: 0, scale: 1 };
  const spring: Spring = { tension: 120, friction: 14 };
  let animationFrameId: number | null = null;

  const calculateSpringPhysics = () => {
    // Calcular força da mola para x
    const springForceX = (targetPosition.x - position.x) * spring.tension;
    const dampingX = velocity.x * spring.friction;
    const accelerationX = springForceX - dampingX;

    // Calcular força da mola para y
    const springForceY = (targetPosition.y - position.y) * spring.tension;
    const dampingY = velocity.y * spring.friction;
    const accelerationY = springForceY - dampingY;

    // Calcular força da mola para scale
    const springForceScale =
      (targetPosition.scale - position.scale) * spring.tension;
    const dampingScale = velocity.scale * spring.friction;
    const accelerationScale = springForceScale - dampingScale;

    // Atualizar velocidade (usando dt pequeno para estabilidade)
    velocity.x += accelerationX * 0.0005;
    velocity.y += accelerationY * 0.0005;
    velocity.scale += accelerationScale * 0.0005;

    // Atualizar posição
    position.x += velocity.x;
    position.y += velocity.y;
    position.scale += velocity.scale;

    // Aplicar transformação
    element.style.transform = `translate3d(${position.x}px, ${position.y}px, 0) scale(${position.scale})`;

    // Continuar animação
    animationFrameId = requestAnimationFrame(calculateSpringPhysics);
  };

  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calcular a distância relativa do centro (valor entre -1 e 1)
    const distanceX = (e.clientX - centerX) / (rect.width / 2);
    const distanceY = (e.clientY - centerY) / (rect.height / 2);

    // Definir posição alvo baseada na distância do mouse
    targetPosition = {
      x: distanceX * 5, // Multiplicador para maior movimento
      y: distanceY * 3, // Movimento vertical menor para efeito mais sutil
      scale: 1.02, // Escala levemente aumentada em hover
    };

    // Iniciar cálculo de física se ainda não estiver rodando
    if (animationFrameId === null) {
      calculateSpringPhysics();
    }
  };

  const handleMouseLeave = () => {
    // Voltar à posição original quando o mouse sair
    targetPosition = { x: 0, y: 0, scale: 1 };
  };

  // Adicionar eventos
  element.addEventListener("mousemove", handleMouseMove);
  element.addEventListener("mouseleave", handleMouseLeave);

  // Função para limpar eventos e animação
  const cleanup = () => {
    element.removeEventListener("mousemove", handleMouseMove);
    element.removeEventListener("mouseleave", handleMouseLeave);
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  };

  return cleanup;
}

// Função auxiliar para aplicar física de molas a múltiplos elementos
export function applySpringPhysicsToCollection(selector: string) {
  const elements = document.querySelectorAll<HTMLElement>(selector);
  const cleanupFunctions: (() => void)[] = [];

  elements.forEach((element) => {
    const cleanup = applySpringPhysics(element);
    cleanupFunctions.push(cleanup);
  });

  // Retorna função para limpar todos os handlers
  return () => {
    cleanupFunctions.forEach((cleanup) => cleanup());
  };
}
