export interface Invitation {
  id: number;
  inviterUserId: number;
  teamId: string;
  dashboard: {
    id: number;
    title: string;
  };
  invitee: {
    id: number;
    email: string;
    nickname: string;
  };
  inviteAccepted: boolean;
  createdAt: number;
  updatedAt: number;
}

export interface GetInvitationsData {
  Invitations: Invitation[];
  cursorId: number | null;
}

export interface GetInvitationProps {
  title: string;
  size?: number;
  cursorId?: number;
  token: string;
}

export interface PutInvitationsProps {
  invitationId: string;
  token: string;
}
